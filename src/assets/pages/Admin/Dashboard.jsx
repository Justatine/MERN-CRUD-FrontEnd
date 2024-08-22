import React from 'react'
import Button from '../../components/Form/Button';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const studentData = [
        {
            idno: 1,
            image: 'test1',
            firstname: 'test1',
            lastname: 'test1',
            username: 'test1',
            role: 'test1'
        },
        {
            idno: 2,
            image: 'test2',
            firstname: 'test2',
            lastname: 'test2',
            username: 'test2',
            role: 'test2'
        },
        {
            idno: 3,
            image: 'test3',
            firstname: 'test3',
            lastname: 'test3',
            username: 'test3',
            role: 'test3'
        }
    ]
  return (
    <div>
        <main>
            <div className="mx-auto max-w-8xl px-4 py-6 sm:px-6 lg:px-8 bg-slate-50">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 h-full">
                    <div className="bg-inherit p-4 h-full">
                        <div className='font-mono font-semibold'>
                            <h1 className="text-center text-3xl font-semibold font-mono">Manage Students</h1>
                            <div className="w-full p-4 mx-auto">
                                <div class="relative overflow-x-auto">
                                    <div className="flex flex-wrap justify-between">
                                        <p></p>
                                        <a href="/admin/add-student">
                                            <Button type='button' text='Add' />
                                        </a>
                                    </div>
                                    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    Student ID
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Student Image
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Firstname
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Lastname
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Username
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Role
                                                </th>
                                                <th scope="col" class="px-6 py-3 text-center">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {studentData.map(student => (
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th key={student.idno} scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {student.idno}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        {student.image}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {student.firstname}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {student.lastname}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {student.username}
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        {student.role}
                                                    </td>
                                                    <td class="px-6 py-4 flex flex-wrap justify-center">
                                                        <Link to={`/admin/edit-student/${student.idno}`}>
                                                            <Button type='button' text='Edit' />
                                                        </Link>
                                                        <Button type='button' text='Delete' />
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
