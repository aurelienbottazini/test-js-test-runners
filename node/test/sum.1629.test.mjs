
import sum1629 from '../sum1629.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 3 + 32 to equal 35 + offset 0.6264603115160167', (t) => {
  assert.strictEqual(sum1629(3, 32), 35 + 0.6264603115160167);
});
