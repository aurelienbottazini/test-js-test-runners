
import sum1838 from '../sum1838.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 88 + 79 to equal 167 + offset 0.3073692796789169', (t) => {
  assert.strictEqual(sum1838(88, 79), 167 + 0.3073692796789169);
});
