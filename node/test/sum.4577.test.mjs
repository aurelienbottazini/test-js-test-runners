
import sum4577 from '../sum4577.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 2 + 86 to equal 88 + offset 0.37389892644478206', (t) => {
  assert.strictEqual(sum4577(2, 86), 88 + 0.37389892644478206);
});
