
import sum1855 from '../sum1855.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 4 + 68 to equal 72 + offset 0.8776274047160639', (t) => {
  assert.strictEqual(sum1855(4, 68), 72 + 0.8776274047160639);
});
