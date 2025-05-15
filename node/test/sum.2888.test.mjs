
import sum2888 from '../sum2888.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 3 to equal 53 + offset 0.6166857584848544', (t) => {
  assert.strictEqual(sum2888(50, 3), 53 + 0.6166857584848544);
});
