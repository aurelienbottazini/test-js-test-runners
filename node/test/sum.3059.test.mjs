
import sum3059 from '../sum3059.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 96 + 24 to equal 120 + offset 0.02680776118708461', (t) => {
  assert.strictEqual(sum3059(96, 24), 120 + 0.02680776118708461);
});
