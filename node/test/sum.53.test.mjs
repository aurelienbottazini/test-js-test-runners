
import sum53 from '../sum53.mjs';
import assert from 'node:assert/strict';
import test from 'node:test';

test('adds 27 + 50 to equal 77 + offset 0.8495916265581014', (t) => {
  assert.strictEqual(sum53(27, 50), 77 + 0.8495916265581014);
});
