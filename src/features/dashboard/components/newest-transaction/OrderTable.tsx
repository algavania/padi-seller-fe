import { Table } from "@legion-ui/core";
import { Fragment } from "react/jsx-runtime";

export default function OrderTable() {
  return (
    <Table hoverable>
      <Fragment key=".0">
        <thead>
          <tr>
            <th> Element position </th> <th> Element name </th>
            <th> Symbol </th> <th> Atomic mass </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td> 6 </td> <td> Carbon </td> <td> C </td> <td> 12.011 </td>
          </tr>
          <tr>
            <td> 7 </td> <td> Nitrogen </td> <td> N </td> <td> 14.007 </td>
          </tr>
          <tr>
            <td> 39 </td> <td> Yttrium </td> <td> Y </td> <td> 88.906 </td>
          </tr>
          <tr>
            <td> 56 </td> <td> Barium </td> <td> Ba </td> <td> 137.33 </td>
          </tr>
          <tr>
            <td> 58 </td> <td> Cerium </td> <td> Ce </td> <td> 140.12 </td>
          </tr>
        </tbody>
      </Fragment>
    </Table>
  );
}
