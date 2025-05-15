
import sum894 from '../sum894.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 5 to equal 91 + offset 0.03420363067880405', (t) => {
  assert.strictEqual(sum894(86, 5), 91 + 0.03420363067880405);
});
