
import sum964 from '../sum964.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 60 to equal 146 + offset 0.7770155077860528', (t) => {
  assert.strictEqual(sum964(86, 60), 146 + 0.7770155077860528);
});
