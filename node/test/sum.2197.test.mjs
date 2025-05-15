
import sum2197 from '../sum2197.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 4 to equal 74 + offset 0.2675081466272604', (t) => {
  assert.strictEqual(sum2197(70, 4), 74 + 0.2675081466272604);
});
