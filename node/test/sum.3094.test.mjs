
import sum3094 from '../sum3094.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 24 + 97 to equal 121 + offset 0.756558778730864', (t) => {
  assert.strictEqual(sum3094(24, 97), 121 + 0.756558778730864);
});
