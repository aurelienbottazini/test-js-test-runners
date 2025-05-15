
import sum323 from '../sum323.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 31 + 65 to equal 96 + offset 0.5505271501213712', (t) => {
  assert.strictEqual(sum323(31, 65), 96 + 0.5505271501213712);
});
