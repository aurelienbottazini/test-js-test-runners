
import sum3838 from '../sum3838.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 37 to equal 99 + offset 0.7401500333588593', (t) => {
  assert.strictEqual(sum3838(62, 37), 99 + 0.7401500333588593);
});
