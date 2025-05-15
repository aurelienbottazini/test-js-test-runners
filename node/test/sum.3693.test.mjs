
import sum3693 from '../sum3693.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 84 + 28 to equal 112 + offset 0.5273821463414653', (t) => {
  assert.strictEqual(sum3693(84, 28), 112 + 0.5273821463414653);
});
