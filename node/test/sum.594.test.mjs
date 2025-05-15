
import sum594 from '../sum594.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 53 + 32 to equal 85 + offset 0.22060059150624234', (t) => {
  assert.strictEqual(sum594(53, 32), 85 + 0.22060059150624234);
});
