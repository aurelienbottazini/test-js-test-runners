
import sum3857 from '../sum3857.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 91 + 43 to equal 134 + offset 0.1513037369212593', (t) => {
  assert.strictEqual(sum3857(91, 43), 134 + 0.1513037369212593);
});
