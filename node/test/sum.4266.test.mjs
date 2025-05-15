
import sum4266 from '../sum4266.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 21 to equal 112 + offset 0.04022822783986835', (t) => {
  assert.strictEqual(sum4266(91, 21), 112 + 0.04022822783986835);
});
