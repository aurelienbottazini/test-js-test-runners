
import sum3002 from '../sum3002.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 42 + 37 to equal 79 + offset 0.2761580298318156', (t) => {
  assert.strictEqual(sum3002(42, 37), 79 + 0.2761580298318156);
});
