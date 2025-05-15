
import sum1388 from '../sum1388.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 50 + 76 to equal 126 + offset 0.48570087521485794', (t) => {
  assert.strictEqual(sum1388(50, 76), 126 + 0.48570087521485794);
});
