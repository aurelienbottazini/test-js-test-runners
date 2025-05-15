
import sum3227 from '../sum3227.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 35 + 94 to equal 129 + offset 0.9457390719429882', (t) => {
  assert.strictEqual(sum3227(35, 94), 129 + 0.9457390719429882);
});
