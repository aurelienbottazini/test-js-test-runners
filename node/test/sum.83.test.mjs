
import sum83 from '../sum83.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 70 + 50 to equal 120 + offset 0.8774939588142295', (t) => {
  assert.strictEqual(sum83(70, 50), 120 + 0.8774939588142295);
});
