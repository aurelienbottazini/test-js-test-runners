
import sum3960 from '../sum3960.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 89 to equal 116 + offset 0.9088402144869043', (t) => {
  assert.strictEqual(sum3960(27, 89), 116 + 0.9088402144869043);
});
