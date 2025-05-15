
import sum851 from '../sum851.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 62 + 72 to equal 134 + offset 0.2531952083839971', (t) => {
  assert.strictEqual(sum851(62, 72), 134 + 0.2531952083839971);
});
