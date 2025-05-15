
import sum610 from '../sum610.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 29 to equal 91 + offset 0.8364252136761956', (t) => {
  assert.strictEqual(sum610(62, 29), 91 + 0.8364252136761956);
});
