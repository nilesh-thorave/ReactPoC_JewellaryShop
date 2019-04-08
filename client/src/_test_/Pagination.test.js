import { render, cleanup, fireEvent } from 'react-testing-library';
import Pagination from '../component/collections/paginator/Pagination'
import React from "react";
import 'jest-dom/extend-expect'

describe('Pagination Component', ()=>{
    afterEach(cleanup)
    test('calling Pagination with 1 page doesnot display pagination', () => {
        const onChangPage= jest.fn();
        const {queryByTestId} = render(<Pagination totalNumberOfItems="10" itemsPerPage="12" currentPage="1" onChangPage= { onChangPage}></Pagination>)
         expect(queryByTestId('1')).toBeNull();
    })

    test('calling Pagination with more than 1 page displays pagination', () => {
    const onChangPage= jest.fn();
    const {queryByTestId} = render(<Pagination totalNumberOfItems="13" itemsPerPage="12" currentPage="1" onChangPage= { onChangPage}></Pagination>)
        expect(queryByTestId('2')).toBeDefined();
    })

    test('clicking pagenumber', () => {
        const onChangPage= jest.fn();
        const {getByTestId} = render(<Pagination totalNumberOfItems="13" itemsPerPage="12" currentPage="1" onChangPage= { onChangPage}></Pagination>)
        fireEvent.click(getByTestId('2'));    
        expect(onChangPage).toHaveBeenCalled();
        expect(onChangPage).toBeCalledWith(2);
        })

    test('clicking Next button', () => {
        const onChangPage= jest.fn();
        const {getByText} = render(<Pagination totalNumberOfItems="13" itemsPerPage="12" currentPage='1' onChangPage= { onChangPage}></Pagination>)
        fireEvent.click(getByText('Next'));    
        expect(onChangPage).toHaveBeenCalled();
        expect(onChangPage).toBeCalledWith(2);
        })

    test('clicking Previous button', () => {
        const onChangPage= jest.fn();
        const {getByText} = render(<Pagination totalNumberOfItems="13" itemsPerPage="12" currentPage='2' onChangPage= { onChangPage}></Pagination>)
        fireEvent.click(getByText('Previous'));    
        expect(onChangPage).toHaveBeenCalled();
        expect(onChangPage).toBeCalledWith(1);
        })
})
