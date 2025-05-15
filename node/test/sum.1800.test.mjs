
import sum1800 from '../sum1800.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 32 + 5 to equal 37 + offset 0.1886954801555134', (t) => {
  assert.strictEqual(sum1800(32, 5), 37 + 0.1886954801555134);
});
