
import sum1308 from '../sum1308.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 20 + 48 to equal 68 + offset 0.28346836578683743', (t) => {
  assert.strictEqual(sum1308(20, 48), 68 + 0.28346836578683743);
});
