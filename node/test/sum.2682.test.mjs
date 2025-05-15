
import sum2682 from '../sum2682.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 48 + 4 to equal 52 + offset 0.16590170301179197', (t) => {
  assert.strictEqual(sum2682(48, 4), 52 + 0.16590170301179197);
});
