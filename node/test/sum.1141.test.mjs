
import sum1141 from '../sum1141.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 17 + 2 to equal 19 + offset 0.7487959371611992', (t) => {
  assert.strictEqual(sum1141(17, 2), 19 + 0.7487959371611992);
});
