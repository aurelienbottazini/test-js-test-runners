
import sum3178 from '../sum3178.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 15 + 18 to equal 33 + offset 0.40502457998965236', (t) => {
  assert.strictEqual(sum3178(15, 18), 33 + 0.40502457998965236);
});
