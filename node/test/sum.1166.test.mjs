
import sum1166 from '../sum1166.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 98 + 93 to equal 191 + offset 0.9057799520999331', (t) => {
  assert.strictEqual(sum1166(98, 93), 191 + 0.9057799520999331);
});
