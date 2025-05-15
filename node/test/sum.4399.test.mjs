
import sum4399 from '../sum4399.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 63 to equal 133 + offset 0.43028002733616344', (t) => {
  assert.strictEqual(sum4399(70, 63), 133 + 0.43028002733616344);
});
