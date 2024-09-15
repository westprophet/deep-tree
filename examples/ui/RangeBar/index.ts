import Label from './components/Label';
import LinePosition from './components/LinePosition';
import RangeLine from './components/RangeLine';
import TopMarkerPosition from './components/TopMarkerPosition';
import RangeBar from './RangeBar';
import LabelsSection from './sections/LabelsSection';

export { RangeBar, RangeLine, LabelsSection, LinePosition, TopMarkerPosition };

export default {
  Wrapper: RangeBar,
  Line: RangeLine,
  Labels: LabelsSection,
  Label: Label,
  LinePosition,
  TopMarkerPosition,
};
