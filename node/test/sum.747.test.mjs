
import sum747 from '../sum747.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 65 + 22 to equal 87 + offset 0.492151968036993', (t) => {
  assert.strictEqual(sum747(65, 22), 87 + 0.492151968036993);
});
