
import sum439 from '../sum439.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 79 + 29 to equal 108 + offset 0.3048802381497918', (t) => {
  assert.strictEqual(sum439(79, 29), 108 + 0.3048802381497918);
});
