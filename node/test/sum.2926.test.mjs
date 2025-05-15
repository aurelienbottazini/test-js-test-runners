
import sum2926 from '../sum2926.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 13 + 59 to equal 72 + offset 0.9694080655924298', (t) => {
  assert.strictEqual(sum2926(13, 59), 72 + 0.9694080655924298);
});
