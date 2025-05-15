
import sum759 from '../sum759.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 6 + 23 to equal 29 + offset 0.47973768010420714', (t) => {
  assert.strictEqual(sum759(6, 23), 29 + 0.47973768010420714);
});
