
import sum431 from '../sum431.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 26 + 16 to equal 42 + offset 0.5005876913555215', (t) => {
  assert.strictEqual(sum431(26, 16), 42 + 0.5005876913555215);
});
