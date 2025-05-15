
import sum1105 from '../sum1105.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 25 + 60 to equal 85 + offset 0.45398422326436594', (t) => {
  assert.strictEqual(sum1105(25, 60), 85 + 0.45398422326436594);
});
