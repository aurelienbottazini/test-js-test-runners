
import sum3931 from '../sum3931.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 14 + 7 to equal 21 + offset 0.14748645803293825', (t) => {
  assert.strictEqual(sum3931(14, 7), 21 + 0.14748645803293825);
});
