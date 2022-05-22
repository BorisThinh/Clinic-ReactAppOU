import { useEffect, useState } from "react";
import { Row, Table,Button,Card, Col,Badge } from "react-bootstrap";
import Api, { endpoints } from "../layouts/configs/Api";
import Moment from 'react-moment'

export default function Examination_schedule () { 
    const [schedule, setSchedule] = useState([])
    const [examination_schedule_patient,setExamination_Schedule_Patient] = useState([])
    useEffect(() => {
        let loadSchedule = async () => {
            try {
                let res = await Api.get(endpoints["examination-schedule"])
                setSchedule(res.data.results)
            } catch (error) {
                console.error(error)
            }
        }
        loadSchedule()
    },[])

    return (
        <>
            <h1 className="text-center text-danger">THÔNG TIN LỊCH KHÁM</h1>
            <br></br>
            <Table bordered>
                <tr>
                    <th>Số thứ tự phiếu đăng ký</th>
                    {schedule.map(s => <td>{s.id}</td>)}
                </tr>
                <tr>
                    <th>Ngày khám</th>
                    {schedule.map(s => <td><Moment parse="YYYY-MM-DD HH:mm">{s.date_examination}</Moment></td>)}
                </tr>
                <tr>
                    <th>Thông tin bệnh nhân</th>
                </tr>
                
            </Table>
            {/* {schedule.map(s =>  )} */}
        
            
        </>
    )
}