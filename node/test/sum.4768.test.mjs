
import sum4768 from '../sum4768.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 81 + 48 to equal 129 + offset 0.2856016026331586', (t) => {
  assert.strictEqual(sum4768(81, 48), 129 + 0.2856016026331586);
});
