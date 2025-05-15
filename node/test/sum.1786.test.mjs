
import sum1786 from '../sum1786.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 79 to equal 158 + offset 0.28817537838858853', (t) => {
  assert.strictEqual(sum1786(79, 79), 158 + 0.28817537838858853);
});
