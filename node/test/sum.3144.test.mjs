
import sum3144 from '../sum3144.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 37 to equal 128 + offset 0.23455640167730363', (t) => {
  assert.strictEqual(sum3144(91, 37), 128 + 0.23455640167730363);
});
