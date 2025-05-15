
import sum1585 from '../sum1585.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 90 + 27 to equal 117 + offset 0.8356339302765861', (t) => {
  assert.strictEqual(sum1585(90, 27), 117 + 0.8356339302765861);
});
