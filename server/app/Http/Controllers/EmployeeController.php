<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function getEmployees(){
        return response()->json(Employee::all(), 200);
    }

    public function getEmployeeById($id){
        $employee = Employee::find($id);
        if(is_null($employee)){
            return response()->json(['message' => 'Employee Not Found.'], 400);
        }
        return response()->json($employee, 200);
    }

    public function createEmployee(Request $request){
        $employee = Employee::create($request->all());
        return response()->json($employee, 201);
    }

    public function updateEmployee(Request $request, $id){
        $employee = Employee::find($id);
        if(is_null($employee)){
            return response()->json(['message' => 'Employee Not Found.'], 400);
        }
        $employee->update($request->all());
        return response()->json($employee, 200);
    }

    public function deleteEmployee(Request $request, $id){
        $employee = Employee::find($id);
        if(is_null($employee)){
            return response()->json(['message' => 'Employee Not Found.'], 400);
        }
        $employee->delete();
        return response()->json(null, 204);
    }

}
