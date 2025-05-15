
import sum3835 from '../sum3835.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 95 + 62 to equal 157 + offset 0.7450131084240756', (t) => {
  assert.strictEqual(sum3835(95, 62), 157 + 0.7450131084240756);
});
