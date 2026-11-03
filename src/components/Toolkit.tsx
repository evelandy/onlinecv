import Chapter from './Chapter';
import { sheetHeader, toolkit } from '../data/toolkit';
import './Toolkit.css';

const Toolkit = () => (
  <Chapter id="toolkit" num="04" title={<>Toolkit <em>spec sheet</em></>} folio="p. 27" intro="Laid out like the mill spec sheets I worked with every day at AscendSC.">
    <div className="sheet">
      <div className="sheet-top">
        {sheetHeader.map(([label, value]) => <div key={label}><span className="mono">{label}</span><b>{value}</b></div>)}
      </div>
      <div className="sheet-scroll">
        <table>
          <thead><tr><th>Item</th><th>Category</th><th>Specification</th><th>Last run at</th></tr></thead>
          <tbody>
            {toolkit.map((row, i) => (
              <tr key={row.category}>
                <td className="item">04.{i + 1}</td>
                <td className="cat">{row.category}</td>
                <td>{row.spec}</td>
                <td className="last">{row.lastRun}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </Chapter>
);

export default Toolkit;
