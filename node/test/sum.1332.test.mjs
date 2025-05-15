
import sum1332 from '../sum1332.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 16 + 65 to equal 81 + offset 0.22277065630867088', (t) => {
  assert.strictEqual(sum1332(16, 65), 81 + 0.22277065630867088);
});
