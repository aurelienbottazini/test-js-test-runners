
import sum1513 from '../sum1513.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 85 + 88 to equal 173 + offset 0.2355315711963354', (t) => {
  assert.strictEqual(sum1513(85, 88), 173 + 0.2355315711963354);
});
