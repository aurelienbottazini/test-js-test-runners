
import sum1398 from '../sum1398.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 33 + 96 to equal 129 + offset 0.35994803816800125', (t) => {
  assert.strictEqual(sum1398(33, 96), 129 + 0.35994803816800125);
});
