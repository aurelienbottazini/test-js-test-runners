
import sum4229 from '../sum4229.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 86 + 57 to equal 143 + offset 0.6837365177508373', (t) => {
  assert.strictEqual(sum4229(86, 57), 143 + 0.6837365177508373);
});
